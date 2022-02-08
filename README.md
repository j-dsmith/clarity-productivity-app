# Clarity

Clarity is a fullstack productivity app built with [Next.js](https://nextjs.org/) and [MongoDB](https://www.mongodb.com/). It features user persistence and authentication using [NextAuth](https://next-auth.js.org/), and a headless RichText WYSIWYG editor to allow the user to create and persist projects and notes. Several other custom components round out the productivity features of the application

## Navigating the App
The app features authentication to get past the landing page, but a guest account can be used that will sign the user in and allow them to explore the app with full functionality without their data persisting when they log out.

All sections of the app can be accessed throught the sidebar.
- A section for Flashcards is currently in development, and will allow the user to create study decks of flashcards that can be studied using space repetition. The study status of each deck will be tracked in the user's profile.

- A trash or deleted section is the final feature in development, which will allow the user to recover deleted projects and notes, or clear the trash to remove them permenantly.
 
## Why I built the project this way 
I developed this app using Next.js for a much smoother development experience. Styled-components offered the greatest flexibility when styling and allowed me to reuse a minimal amount of UI buttons for different sections of the app. 

CSS variables allowed me to use global styles efficiently with less boilerplate than styled-component template strings using ternary operator expressions. I switched to CSS variables late in development and refactored the majority of the app, although there are still ternaries used in certain sections which could all be converted to CSS variables as well. That may be part of a future refactor and update.

My first version of this app used Redux as a pseudo database, which I later converted to a Node.js backend with MongoDB in my second iteration. This version also avoids using Redux, choosing to use React.Context API instead where needed. 

I experimented with Framer Motion to animate different portions of the app, this was my first time working with it and I found it very intuitive to work with and useful for coordinating complex or linked animations. I didn't use this for the entire app but could see a design system built around its implementation being useful.

Finally, I have experimented with Draft.js and React Quill for RichText Editors in the past and found both to be overly complicated or rigid in React projects. This was my first time working with TipTap as a headless RichText editor and it was by far the best as in terms of developer experience. Spinning up a custom editor and styling it was easy and intuitive. It has a large package footprint which was the main drawback but I didn't notice any performance issues.

## If I had more time I would change this
- Add responsive styling to accommodate multiple screen sizes is the highest priority feature to implement. Currently the site is optimized for desktop screen sizes.
- There are several features still in development that I would like to add in future versions. 
- Overall I am happy with the design and UI, but if I was releasing the app commercially I would most likely scale back some of the design choices for a more subtle effect.
- Implementing user authentication with NextAuth could also be expanded to include Provider based sign in for Google or Facebook, but I ran into issues implementing this using Mongoose on the backend. 
- Persisting the Pomodoro timer state to allow the user to navigate throughout the site while keeping an active timer cycle would be a feature to implement given more time. 
- This project is a continued iteration of several previous verions and has changed design methodologies and techniques several times. In the future, or given enough time to expand this app to React Native, I would start the design process from wireframe and take a more structured approach to development rather than the experimental approach I took this time.

#### This project can be viewed live on Vercel: [Clarity](https://clarity-swart.vercel.app/)
