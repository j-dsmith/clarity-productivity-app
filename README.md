# Clarity

Clarity is a fullstack productivity app built with [Next.js]('https://nextjs.org/) and [MongoDB](https://www.mongodb.com/). It features user persistence and authentication using [NextAuth]('https://next-auth.js.org/'), and a headless RichText WYSIWYG editor to allow the user to create and persist projects and notes. Several other custom components round out the productivity features of the application

## Components

All components are accessible from the Sidebar, which is visible immediately after a user signs in.

The core of Clarity is the RichText editor, which was built using [tiptap](https://tiptap.dev/api/editor/), a headless RichTextEditor. The functionality was modeled after the Notes application in IOS and MacOS, allowing users to create folders for managing ideas or projects. Notes are created from within each project and can be saved to the users profile.

The Dashboard is composed of 4 separate widgets: a Calendar, Forecast, Task List, and Stats for the users projects, completed tasks, and pomodoro cycles. The weather forecast uses data fetched from [OpenWeatherMap](https://tiptap.dev/api/editor/).

A Pomodoro Timer allows the user to focus using the "Pomodoro Technique", a method of study that cycles from a period of study to a short break. This method helps optimize studying by targeting a study session that does not exceed the human attention span, followed by a short break to allow the mind time to recover. A Pomodoro cycle is typically four cycles of study and break, followed by a longer rest period. 

This component allows the user to set their own time limits for sessions and breaks, and will track the rounds completed for the current cycle. If 4 cycles are completed, a celebration animation occurs and the number of completed Pomodoro cycles is tracked in the users profile, displaying in the Stats component of the Dashboard. Currently the timer does not remain active if the user navigates away to a different part of the application but that feature will be added in a future update.

A section for Flashcards is currently in development, and will allow the user to create study decks of flashcards that can be studied using space repetition. The study status of each deck will be tracked in the user's profile.

A trash or deleted section is the final feature in development, which will allow the user to recover deleted projects and notes, or clear the trash to remove them permenantly.
 
