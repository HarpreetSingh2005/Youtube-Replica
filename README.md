# YouTube Replica 

A full-stack YouTube clone built to understand the complexities of modern web development, component architecture, and database management. This was my first major self-made project.

## Overview
The goal of this project was to recreate the core experience of YouTube, focusing on a responsive UI, video data integration, and user authentication. 

## Features
- **Authentication:** Custom login/signup system using **Neon** (Postgres) and **Drizzle ORM**.
- **Session Management:** Used cookies to keep users signed in.
- **Data Flow:** Implemented data sharing between parent and child components.
- **Manual Styling:** Most of the CSS was written manually to match the YouTube UI.
- **Video Integration:** Fetching and displaying data via APIs.

## Tech Stack
- **Framework:** Next.js / React
- **Database:** Neon
- **ORM:** Drizzle
- **Language:** JavaScript / CSS

## Challenges & Current Issues
- **API Fetching:** This was the most difficult part. I used AI (GPT/Gemini) for about 90% of the logic here. I am still facing an issue where the API sometimes fetches data multiple times or inconsistently, which I am still trying to fully understand.
- **Component Complexity:** Managing data transfer between multiple nested components was confusing initially, but I managed to implement it to get the site functional.
- **Database Setup:** Learning to connect Drizzle with Neon and managing schemas for the first time.
