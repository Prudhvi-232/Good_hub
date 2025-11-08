# 🌍 Good_hub – Where Doing Good Pays Back

> A social helping and verification platform that connects people, verified NGOs, and organisations to make social service transparent, rewarding, and officially verifiable.

---

## 🧭 Vision

**Good_hub** aims to create a digital ecosystem where individuals, companies, and verified organisations can come together to **help others, donate, and volunteer** — all while earning official recognition and government-backed tax benefits under **Section 80G (India)**.

The platform promotes **transparency, gamification, and verified impact tracking** to encourage more people to participate in community welfare.

---

## ✨ Key Features

### 🏠 Home Feed  
- Personalized feed showing help posts only from **users you follow** and a few **top verified helpers**.  
- Posts include pictures, captions, and proof of completed help/donations.  
- Left sidebar: Profile summary + contribution history.  
- Right sidebar: Leaderboards + upcoming help opportunities.

### 💰 Help / Donate Page  
- Post blogs or requests for help (like “Feed a dog”, “Support old-age home”).  
- Explore **missions** (Easy/Medium/Hard) to earn **GoodPoints**.  
- Donate to **verified NGOs** (money, food, clothes, or services).  
- All donations are tracked and verified for **tax benefit proof**.

### 🏆 Leaderboard  
- See top helpers globally or among your friends.  
- Ranked based on **GoodPoints** earned from verified activities.

### 📍 Location Page  
- Interactive **map view** showing areas that need help and nearby NGOs/trusts.  
- Click to **navigate using Google Maps**.  
- Displays verified organisations with their contact info.

### 👤 Profile Page  
- Shows user details, badges, certificates, and help history.  
- Auto-generated **verification certificate** for each completed help.  
- Option to share achievements publicly.

### 💬 Messaging  
- Private chat system between helpers and organisations.  
- Used for coordination, proof exchange, or help verification.

---

## 🧰 Technology Stack

| Component | Technology |
|------------|-------------|
| **Frontend** | React + TailwindCSS |
| **Backend** | FastAPI / Django REST Framework |
| **Database** | PostgreSQL |
| **Authentication** | JWT + KYC Verification |
| **AI/Automation** | Fraud detection & document verification |
| **Deployment** | Docker + AWS / Vercel |

---

## ⚙️ Installation & Setup

Follow these steps to set up **Good_hub** locally 👇

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/Good_hub.git
cd Good_hub
````

### 2️⃣ Install Frontend (React)

```bash
cd client
npm install
npm start
```

### 3️⃣ Setup Backend (FastAPI or Django)

```bash
cd server
pip install -r requirements.txt
# For FastAPI
uvicorn main:app --reload
# OR for Django
python manage.py runserver
```

### 4️⃣ Setup Database

```bash
# PostgreSQL setup example
psql -U postgres
CREATE DATABASE goodhub;
```

### 5️⃣ Environment Variables

Create a `.env` file in your `server/` directory:

```
DATABASE_URL=postgresql://username:password@localhost/goodhub
JWT_SECRET=your_secret_key
CLOUD_API_KEY=your_api_key
```

---

## 🧾 Example Use Case

> A government employee maintaining an old-age home can register it on **Good_hub**.
> After verification, all donations and expenses are recorded digitally.
> The platform generates a verified **tax-deduction certificate (80G proof)** that helps reduce taxable income — turning good deeds into official, measurable impact.

---

## 🧠 AI Modules (Optional Enhancements)

* 🕵️ Fraud detection for false donation claims
* 📄 Automatic document verification (PAN, Trust Deed, etc.)
* 🤖 Recommendation system for nearby help tasks

---

## 🎯 Future Enhancements

* Mobile app (Flutter)
* Digital ID for verified NGOs
* API integration for CSR tracking
* AI-powered help suggestion system

---

## 📊 Impact

Good_hub promotes **verified, transparent, and rewarding social work** by combining technology, government compliance, and social networking principles.

It bridges the gap between **helpers** and **those who need help**, making doing good both **visible and valuable**.

---

## 🖋️ Tagline

> ❤️ **Good_hub – Where Doing Good Pays Back.**

---

## 📸 Screenshots (To Add Later)

* 🏠 Home Page
* 💰 Help/Donate Page
* 🏆 Leaderboard
* 📍 Location Map
* 👤 Profile Page

*(Add screenshots after UI completion)*

---

## 🤝 Contributing

Pull requests are welcome!
If you'd like to add features or fix bugs:

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/xyz`)
3. Commit changes (`git commit -m 'Add xyz'`)
4. Push to branch (`git push origin feature/xyz`)
5. Open a Pull Request 🎉

---

## 📜 License

This project is licensed under the **MIT License** – free to use and modify with attribution.

---

### 👨‍💻 Developed by

**Prudhvi** and Team
---
