export const activity = [
  {
    date: "October 15th, 2023",
    entry: "Finished up in the Node.js branch of Pokédex Master! I love the way my GitHub contributions map lights up after a good merge. Next up, a fresh, responsive UI. Then deployment! I also really want to build something from scratch. And maybe I should reach out in the EqualEd Discord to see if anyone wants to start working on that... it's shaping up to be a busy Monday!"
  },
  {
    date: "October 14th, 2023",
    entry: "Successfully made it so that a user has 3 save files. Now I just need to figure out how to store the current save file in the session so that the user doesn't have to choose again on page reload. Got everything else working smoothly, including error handling. The plan is to add some more passable styling, an updated README, and take care of the save-file-in-session thing before merging tomorrow. Then I'll think about adding more features!"
  },
  {
    date: "October 13th, 2023",
    entry: "Learned a lot more about Mongoose today, including how to create virtuals (properties not persisted to the database) and include them in the JSON-ified response to a query. Very similar to how I would use custom methods in Active Model Serializers when using Rails. All of the backend routes that I need for now are working as desired, but no doubt I'll be revisiting my code in the near future when I'm stronger with MongoDB & Mongoose."
  },
  {
    date: "October 12th, 2023",
    entry: `Finally used the Postman VS Code <a href="https://marketplace.visualstudio.com/items?itemName=Postman.postman-for-vscode" target="_blank">extension</a> today. I've had it installed for weeks, but I was still using the desktop app. Opening a new tab in my editor is marginally more convenient than switching to another window, but a small upgrade is still an upgrade. Plus I don't have to look at the gnarly orange of Postman's typical UI (says the guy with a similarly orange project in his portfolio). Got my user session object looking the way I want it to, just have to figure out how I want to handle the user's Pokédex. Once that part is squared away, the frontend logic and components will be a cakewalk.`
  },
  {
    date: "October 11th, 2023",
    entry: `Updated the ol' resume today, and sent off my first application in a while. Put some real time into it, trying the quality over quantity thing. I also successfully integrated <a href="https://www.npmjs.com/package/express-session" target="_blank">express-session</a> and <a href="https://www.npmjs.com/package/connect-mongodb-session" target="_blank">connect-mongodb-session</a> into Pokédex Master, along with login and signup routes. Now I just need to get my schemas sorted and do some quick frontend work and I'll be ready to merge the Node.js branch to main and work on a deploy.`
  },
  {
    date: "October 10th, 2023",
    entry: "Did some research on session-based authentication in Node.js and data relationships in Mongoose. Planning to add a User model to Pokédex Master and then deploy it."
  },
  {
    date: "October 9th, 2023",
    entry: `Started a Next.js tutorial project from <a href="https://vercel.com/guides/nextjs-prisma-postgres">Vercel</a>, but quickly got tired of the issues with outdated dependencies and having to fix errors in the code snippets they would give me to use. Gained a little bit of experience with Prisma; creating dummy data with Prisma Studio was an interesting little diversion. Ultimately, the end goal of a simple blog app wasn't captivating enough for me to want to expend extra effort to wrestle through what seemed to be an out-of-date or otherwise largely untested tutorial. Still learned a few things though.`
  },
  {
    date: "October 8th, 2023",
    entry: `Learned enough about Kubernetes to know that it's not something I need to worry about messing with at this point in time. Container orchestration is just a <em>little</em> bit out of scope for an aspiring entry level developer, I think. I'll gladly learn it if the need arises, but there's no use spreading myself too thin right now. On a related note: I believe Docker missed an opportunity when they didn't call their own tool OrcaStrate. Y'know, because of the whole whale aesthetic.`
  },
  {
    date: "October 7th, 2023",
    entry: `Learned the basics of Docker today. Not sure yet if I prefer using the CLI or Docker Desktop. Going to try and tackle Kubernetes between football games tomorrow. Also going to begin migrating all of the projects I created using create-react-app to Next.js or Vite. Better that than constantly having to find workarounds for the dependencies of a defunct project.`
  },
  {
    date: "October 6th, 2023",
    entry: `Added <a href="https://github.com/Limeload/EqualEd" target="_blank">EqualEd</a> to the portfolio page! Also spruced up the place with an svg background image created with <a href="https://app.haikei.app/" target="_blank">Haikei</a>. Pretty neat tool, might go back to that well when I finally sit down to improve the looks of Tossed and Found & Word of Mouth.`
  },
  {
    date: "October 5th, 2023",
    entry: "Final Hackathoughts: All in all, I enjoyed the experience. I was the project manager for my first hackathon, and we ended up being one of the few teams to produce a demo of a working application (every team did have a wonderful presentation though, I definitely took some notes). I learned a lot, and got to brainstorm with and operate alongside some talented developers and designers. The differing, busy schedules got in the way a bit, but I'm proud of what we were able to offer up at the deadline. Plus, nothing is stopping us from continuing to build it into something greater, and I'm hopeful we will. I'm absolutely interested in finding another hackathon to join; I feel that with what I know now I could get off to an even faster start. Or, you know, I could land a job. Might try that. Presentation version of the project goes in the portfolio tomorrow."
  },
  {
    date: "October 4th, 2023",
    entry: `After more research yesterday, I came to realize that making calls with our API key in the frontend wasn't the safest idea. Duh. I went back to the <a href="https://github.com/alexrudall/ruby-openai" target="_blank">ruby-openai gem</a>, scoured the internet for what scarce resources I could find to help me implement my exact vision (there was nothing close), and finally stumbled my way into producing a pretty solid solution. Then I stayed up all night and into the morning making small frontend changes and recording a million demo video takes. Looking forward to seeing what all the other teams came up with tomorrow. As for right now, I could go for a full REST.`
  },
  {
    date: "October 2nd, 2023",
    entry: "I'm still here! Just busy with the Hackathon. Wrote all of the Redux logic, connected it to our backend, and handled errors and loading state all of yesterday and today. Also took it upon myself to do some light styling and a logo, just in case we can't get the full on design in time. I will gladly make the site purple. 😈"
  },
  {
    date: "September 29th, 2023",
    entry: "Getting used to the Git workflow of working in branches, creating pull requests, reviewing and merging. Codebase is coming together quickly now! Also decided it best to integrate OpenAI API functionality in the frontend, through React."
  },
  {
    date: "September 28th, 2023",
    entry: `Found a better <a href="https://github.com/alexrudall/ruby-openai" target="_blank">gem</a>. Looking forward to implementing it during this hackathon! Today I finished up the groundwork for our frontend, complete with a Redux store and slices. Just waiting on the design and some backend stuff to get done. I'm so used to doing everything, so this waiting is killing me! Guess I'll think on some more accessibility features. There's always something to do.`
  },
  {
    date: "September 26th, 2023",
    entry: `Looked into ChatGPT Ruby gems today, and shockingly didn't find all that much. Here's <a href="https://github.com/nagstler/chatgpt-ruby" target="_blank">one</a> that's kind of current, but I think I might like to try my hand at making one myself once this Hackathon is in the rear-view.`
  },
  {
    date: "September 25th, 2023",
    entry: `Decided on <a href="https://userway.org/widget/" target="_blank">UserWay's accessibility widget</a> to cover the AI-driven accessibility criteria for my team's application. It almost feels like cheating though, with how complete and simple to integrate it is. Going to run it by Flatiron personnel tomorrow, but if all is good we'll be able to focus on collaborating and doing all the things we know how to do. Can't wait to write code for a mockup from actual designers!`
  },
  {
    date: "September 24th, 2023",
    entry: `Learned that React Router NavLinks have an 'end' prop today. I had run into an issue where two NavLinks had similar enough paths (/courses and /courses/new) that they would both appear active when only one of them was. Adding the 'end' prop to the Courses NavLink changed the matching logic so that only the end of the end of the path would be matched, and only the correct button received the "active" class. Kind of a slow day.`
  },
  {
    date: "September 23rd, 2023",
    entry: "Started working on a barebones React frontend, just to get a feel for what CSR could look like if nothing else. With the modular nature of React components, I'm sure there will be a few that we can just port over to the actual project repo, if not the whole thing."
  },
  {
    date: "September 22nd, 2023",
    entry: `Not too much to report on the Hackathon front; attended Flatiron's kickoff presentation and got assigned to a team. I started a Discord server for us, but it's an asynchronous hackathon so we're still waiting on some people to check in before getting down to brass tacks. Taking another research night!`
  },
  {
    date: "September 21st, 2023",
    entry: `Went over <a href="https://wcag.com/developers/" target="_blank">Web Content Accessibility Guidelines</a> today in preparation of tomorrow's Hackathon kickoff meeting. Also read up on some AI tool suites like <a href="https://accessibe.com/" target="_blank">Accessibe</a> and <a href="https://userway.org/" target="_blank">Userway</a>. I've got a good enough base to build on top of, but there's a lot of info on project goals and available resources that I won't know until tomorrow. Looking forward to that, and to linking up with my teammates!`
  },
  {
    date: "September 20th, 2023",
    entry: "I'm going to do a Hackathon. Flatiron's Hacktember, to be exact. It's going to run from the 22nd to October 5th, and the build will feature the use of emerging AI technologies to bolster accessibility for diverse learners on an educational platform. Taking today and tomorrow to study up a bit."
  },
  {
    date: "September 19th, 2023",
    entry: `Went through the <a href="https://nextjs.org/learn/basics/create-nextjs-app" target="_blank">Next.js tutorial</a> today. I really love the way client-side routing is implemented. Picked up a couple of new node packages along the way as well: <b>gray-matter</b> for parsing YAML front matter, and <b>remark</b> to parse Markdown files into renderable HTML (which didn't actually work properly in the tutorial). Ready to start working on a Next.js app of my own.`
  },
  {
    date: "September 18th, 2023",
    entry: `PHP is unlike anything I've ever seen! I must learn it... but not now. I'll just add it to my brand new <a href="#/kanban">Kanban</a> board! It's nice to be able to visualize all the things I want to do, simultaneously displaying them for the world to see (so <em>you</em> can hold me accountable!). Task number one is get a job, of course. But I also want to keep learning and improving myself. The board is a great way for me to increase my focus and track my progress.`
  },
  {
    date: "September 17th, 2023",
    entry: "Got my little Swift certificate. Going to cool down on the new language learning for now (I mean it this time, I swear), but I definitely plan to learn SwiftUI and get cracking on an application or two. As for the rest of today, I'm going to update project descriptions and create a sort of 'projects + technologies' to-do list for myself. There's just so much that I want to do and learn; a bit of structure could be just what the doctor ordered to keep me from spreading myself too thin."
  },
  {
    date: "September 16th, 2023",
    entry: `Okay, I really like Swift. It has the shortest print method I've seen since <code>puts</code>, which is nice because these lessons are 50% printing stuff to the console. Then you have the added switch statement features, the use of inclusive ranges, and my favorite so far, the oh-so-clean stride function syntax for iteration. I'm gonna let the whole 'let' thing slide.`
  },
  {
    date: "September 15th, 2023",
    entry: `Hit the end of the Go course. I like how you can add a struct to the fields of another struct to anonymously access the fields of the first struct through the second struct (I found that lesson to be particularly inSTRUCTive). Was that confusing? How about this then: <em>constant</em> variables in Swift are declared using the <em>let</em> keyword. Hi, JavaScript developer here, WHAT?! Yes, I'm learning how to be a Swiftie (is that the right term?), capitalizing on the ol' <a href='https://www.codecademy.com/learn' target="_blank">Codecademy</a> free trial that ends on the 20th. Now I am become dev, the collector of programming languages.`
  },
  {
    date: "September 14th, 2023",
    entry: "Had a 1-on-1 networking conversation today, and heard from some Flatiron alumni that now work in the industry as well. I'm always glad to hear others share their experiences. They can be eye-opening, or simply reassuring. There's always value to be had in a conversation, be it an array of advice or even just a slice. Sometimes, just staying in the loop is nice. Guess what I learned in Go today?"
  },
  {
    date: "September 13th, 2023",
    entry: `Finished the first of <a href='https://www.codecademy.com/learn' target="_blank">Codecademy</a>'s courses on Go. The whole time I was thinking things like "Where are the loops?", "What about arrays?", and "How am I almost done with this already?". Well now I know. There's more! Going to dive into Loops, Arrays, Maps, and something called Structs tomorrow. Should be fun. While I was working through the material, I noticed that the code blocks in the lecture portions for some reason had white backgrounds, which matched the background of the container element and rendered some of the text unreadable (selecting barely helped). My first thought was <em>somebody somewhere has goofed</em>, but then I thought to just open the browser's dev tools and change the element's background to black myself. Look at me, I'm a web developer!`
  },
  {
    date: "September 12th, 2023",
    entry: `<img src="https://go.dev/images/gophers/ladder.svg" alt="Go Gopher" class="entry-pic" />Free trial got extended 7 days, so I'll be taking a look at Golang. Liking what I see so far, especially how clean and concise importing and aliasing multiple packages looks. I'm going to take it slow with this one so I can also carve out time to code in the other languages I've picked up this week.<br/><br/>Attended a virtual event through Flatiron today that provided a glimpse into the world of data visualization, complete with a swift demonstration of some advanced Tableau operations. It appeared to be a low-code gig for the most part, but the case statement syntax did resemble something of a cross between a switch statement and a SQL command. Regardless of whether or not I can see myself becoming a data analyst, it's pretty cool to gain perspective on different technical fields and specializations. The Dallas Software Developers meetup was equally enlightening, with DFW area hiring managers and recruiters from different tech disciplines on the panel to provide insights into what stands out to them in an applicant. I felt validated in some of the things I'm doing, but I also came away with a few new tactics that I'm eager to implement into my own personal strategy. I'm super grateful to the guests and the group organizers for donating their time and sharing their wisdom to help prop up the tech community as a whole. Excited for the next one!`
  },
  {
    date: "September 11th, 2023",
    entry: `Nothing too big to take away from today. I am a little more clear on when to merge and when to rebase with Git, but most everything else was just review. Last part of the course has me making a contribution to the <a href='https://github.com/Codecademy/docs' target="_blank">Codecademy Docs</a> on Github. I'm going to try to get that done tomorrow, but I also will be attending a couple of virtual events as part of Flatiron's Career Week, as well as an in-person Dallas Software Developers meetup. Should be an exciting, busy day.`
  },
  {
    date: "September 10th, 2023",
    entry: `Closed out the Java course, with the last section being about 2D array traversal. Row-major order was second nature to me at this point, but I'd never used column-major order before, so it threw me for a bit of a loop... get it? I just need to remember that converting to column-major traversal is as simple as flipping the terminating conditions of the nested loops AND the accessor indices. Two days left in my <a href="https://www.codecademy.com/learn" target="_blank">Codecademy</a> trial, but I think I'll refrain from trying to cram another language into my brain... for now. Next up: a course on Git and Github.`
  },
  {
    date: "September 9th, 2023",
    entry: `Nearly finished up Java today. Everything I covered today was at least vaguely familiar to me from my time learning JavaScript and Ruby through Flatiron. Seeing core programming concepts executed through slightly different means only serves to reinforce my understanding of them, even if I don't end up programming in Java a whole bunch. I'll be honest though, defining an Array by wrapping it in curly braces elicited a visceral reaction from me. Off to bed now, where I will continue to type <code>public static void main(String[] args){}</code> in my dreams.`
  },
  {
    date: "September 8th, 2023",
    entry: `Slight pivot in plans; decided to make the most of my <a href="https://www.codecademy.com/learn" target="_blank">Codecademy</a> free trial and started a Java course! So I'm addicted to learning, sue me. But going from TypeScript to another compiled language just made sense! There was a bit of a learning curve at first (I must have forgotten something like 2,147,483,647 semicolons), but by the end of the Object Oriented section I was breezing through. Looking forward to day 2!`
  },
  {
    date: "September 7th, 2023",
    entry: `Wrapped up the <a href="https://www.codecademy.com/learn" target="_blank">Codecademy</a> TypeScript course today. Finally got to learn about the interfaces I've been seeing when I look at TS code. As I suspected, they are most heavily used in OOP, and are very much the 'type' counterpart of a class. I've got my little certificate that says I took the time to learn TS; now it's time for me to prove that I know TS. I might watch a few more videos, then try to convert 'Word of Mouth' to use TypeScript, Redux and all. <br/><br/>Also got to meet and chat with a mobile developer at the coffee shop after they recognized the <a href="https://www.codecademy.com/learn" target="_blank">Codecademy</a> code editor on my screen. Super nice guy. It's always awesome when you encounter other developers in the wild -- and make new LinkedIn connections!`
  },
  {
    date: "September 6th, 2023",
    entry: "TypeScript is cool! Learned about nearly all the types and their annotations today (starting on union types tomorrow). On completion of this course, I expect I'll be going through my repos and making sure everything is type-safe, like an expectant parent babyproofing their house."
  },
  {
    date: 'September 5th, 2023',
    entry: `Today was mostly for job applications after stress testing my shiny new portfolio site (had to fix one link after switching to HashRouter). I did find some time to hop over to <a href="https://www.codecademy.com/learn" target="_blank">Codecademy</a> and start learning some TypeScript, though. The utility of types has been apparent to me from the jump, but actually sitting down and working with the TypeScript compiler has me super motivated to continue learning and start updating some of my projects to use TS.`
  },
  {
    date: 'September 4th, 2023',
    entry: "Finally put the finishing touches on this little portfolio site. Spent a lot of time agonizing over CSS, but I feel that it was worth it. The next time I undertake something similar, I'll be able to move a lot faster. I certainly became stronger at using flexbox! Programmatically disabling scroll using component state (when rendering the video player) was something new for me as well. Site goes live tonight!"
  }
]