# 🚗 cars-display


A responsive car model reel built using Next.js 14's App Router, featuring horizontal scroll, dynamic routing, and accessibility support.

# 📦 Features

Dynamic Data Fetching for car models

ProductListReelFrame component styled according to provided designs

Arrow Buttons to scroll left/right (in ProductListReel component)

Responsive Layout for desktop and mobile

Routing to Car Pages:

/cars/[model-name] for car details

/learn/[model-name] and /shop/[model-name] links within each frame

Unit Tests using your preferred testing library

Accessible & Reusable component structure

# 🧱 Components

ProductListReelFrame
Displays:

Car model name

Car image

"Learn" and "Shop" links

Routes:

/cars/model-name

/learn/model-name

/shop/model-name

Matches the provided design specs

ProductListReel
Contains:

Horizontal scrolling logic

Left/right arrow buttons

# 📊 Data Source

The data is fetched from a JSON API that returns an array like:

json
Copy
Edit
[
  {
    "id": "xc90-recharge",
    "modelName": "XC90 Recharge",
    "bodyType": "suv",
    "modelType": "plug-in hybrid",
    "imageUrl": "/images/xc90_recharge.jpg",
    "price": "491,000"
  },
  ...
]

# 🧪 Testing

Unit tests are included using a testing library of your choice (e.g., Jest, React Testing Library).

Focused on core functionality and accessibility.

# 🎯 Goals & Notes

Implement as many requirements as possible within the given time.

Prioritize:

Base functionality

Code quality

Design fidelity

Submit even if not all tasks are fully complete.

# ✅ Requirements

Modern, evergreen browser support

Accessibility is key

Well-structured, reusable code

Use the Volvo Cars Design System where applicable
