# 🏏 SN Cricinfo - Real-Time Cricket Dashboard

**SN Cricinfo** ek modern, high-performance cricket scoring application hai jise **Next.js 14**, **Tailwind CSS**, aur **RapidAPI** ka upyog karke banaya gaya hai. Ye application users ko live matches, upcoming schedules, aur detailed scorecards ka real-time data provide karti hai.

## 🚀 Features

*   **Live Score Streaming**: Cricbuzz API se real-time match updates.
*   **IPL 2026 Special**: Dedicated section for IPL matches and points table.
*   **Responsive UI**: Modern dark theme jo mobile aur desktop dono par smooth chalti hai.
*   **Dynamic Routing**: Har match ke liye dedicated detail pages aur commentary.
*   **Fast Performance**: Next.js Server Components aur Turbopack ka use karke optimized loading.

## 🛠️ Tech Stack

*   **Frontend**: Next.js 14 (App Router)
*   **Styling**: Tailwind CSS
*   **API**: Cricbuzz (via RapidAPI)
*   **Deployment**: Vercel
*   **State Management**: React Hooks (useState, useEffect)

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Suryanarayandixit/sn-cricinfo.git](https://github.com/Suryanarayandixit/sn-cricinfo.git)
    cd sn-cricinfo
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Root folder mein `.env.local` file banayein aur apni API keys dalein:
    ```env
    NEXT_PUBLIC_RAPIDAPI_KEY=your_api_key_here
    NEXT_PUBLIC_RAPIDAPI_HOST=cricbuzz-cricket.p.rapidapi.com
    ```

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Browser mein `http://localhost:3000` open karein.

## 📁 Project Structure
```text
├── app/               # Next.js App Router (Pages & Logic)
├── components/        # Reusable UI Components (MatchCard, PointsTable)
├── lib/               # API integration & Helper functions
├── public/            # Static assets (Images, Icons)
└── services/          # Data fetching logic

# 🤝 Contributing

Contributions are welcome!

## 📄 License

Distributed under the MIT License.

---

**Developed with ❤️ by [Surya](https://github.com/Suryanarayandixit)**
