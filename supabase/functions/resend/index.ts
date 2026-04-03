import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  try {
    const { record } = await req.json()

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'MienCanhKinh <onboarding@resend.dev>',
        to: ['nn.mien1903@gmail.com'],
        subject: `Yêu cầu tư vấn mới từ: ${record.full_name}`,
        html: `
          <h3>Yêu cầu tư vấn mới</h3>
          <p><strong>Họ tên:</strong> ${record.full_name}</p>
          <p><strong>Số điện thoại:</strong> ${record.phone}</p>
          <p><strong>Nội dung:</strong> ${record.message}</p>
          <br/>
          <p>---</p>
          <p>Tin nhắn được gửi từ website Miền Cánh Kính.</p>
        `,
      }),
    })

    const data = await res.json()
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
      status: res.status
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500
    })
  }
})
