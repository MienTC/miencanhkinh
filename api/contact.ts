import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.VITE_SUPABASE_ANON_KEY || ''
);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, phone, message } = req.body;

  try {
    // 1. Lưu vào Supabase Database
    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert([{
        full_name: fullName,
        phone: phone,
        message: message
      }]);

    if (dbError) throw dbError;

    // 2. Gửi email thông báo qua Resend
    const { error: emailError } = await resend.emails.send({
      from: 'MienCanhKinh <onboarding@resend.dev>',
      to: ['nn.mien1903@gmail.com'],
      subject: `Yêu cầu tư vấn mới từ: ${fullName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333;">Yêu cầu tư vấn mới</h2>
          <p><strong>Họ tên:</strong> ${fullName}</p>
          <p><strong>Số điện thoại:</strong> ${phone}</p>
          <p><strong>Nội dung:</strong> ${message}</p>
          <hr />
          <p style="font-size: 12px; color: #888;">Tin nhắn được gửi từ hệ thống website Miền Cánh Kính.</p>
        </div>
      `,
    });

    if (emailError) throw emailError;

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error('API Error:', err);
    return res.status(500).json({ error: err.message });
  }
}
