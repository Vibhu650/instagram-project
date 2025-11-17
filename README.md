# Instagram Login Demo - Educational Security Project

This is an educational security awareness demonstration that simulates a phishing attack to teach users about online security.

## How It Works

### User Experience (Victim Side)
1. Users visit the homepage and see an Instagram-style login page
2. When they enter credentials and submit, the form appears to fail
3. They're redirected to a 404 error page, making it seem like something went wrong
4. Meanwhile, their credentials are captured and stored

### Admin Panel
1. Visit `/admin-login` to access the admin dashboard
2. Enter the access code: `admin123`
3. View all captured submissions including:
   - Username/email
   - Password (hidden by default, click eye icon to reveal)
   - Timestamp
   - User agent information
4. Click "Refresh" to see new submissions
5. Click "Logout" when done

## Pages

- **/** - Instagram login page (main phishing simulation)
- **/404** - Fake error page (shown after submission)
- **/admin-login** - Admin authentication page
- **/admin** - Admin dashboard (protected, requires authentication)

## Educational Purpose

This project demonstrates:
- How phishing pages can mimic legitimate websites
- The importance of checking URLs before entering credentials
- How easily credentials can be captured
- The need for security awareness training

## Security Note

**Default Admin Code:** `admin123`

For educational/demo purposes only. Change this code in `client/src/pages/admin-login.tsx` if deploying to production.

## Technical Stack

- Frontend: React + TypeScript + Tailwind CSS + Shadcn UI
- Backend: Express.js + Node.js
- Storage: In-memory (resets on server restart)
- Real-time: React Query for live data updates

## Usage Instructions

1. Share the main URL with participants (educational session)
2. Access admin panel at `/admin-login` with code `admin123`
3. Monitor submissions in real-time
4. Use this as a teaching tool to discuss security best practices

---

**⚠️ DISCLAIMER:** This project is for educational purposes only. Use responsibly and with proper authorization. Unauthorized credential capture is illegal.
