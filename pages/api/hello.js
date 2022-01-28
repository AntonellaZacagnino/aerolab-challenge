// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler() {
  fetch('https://coding-challenge-api.aerolab.co/products', 
    {headers: 
      { "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWVmMDNkZDZlMDQ1MzAwMWE3YzNlMTciLCJpYXQiOjE2NDMwNTQwNDV9.VVcZd3MqkZ7cq-HWT5KUyFWwkOPSwqIpIEesCPaL3y8"}
    }
  )
  .then(res => res.json())
  // res.status(200).json({ name: 'John Doe' })
}
