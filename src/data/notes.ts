
export interface Note {
    slug: string;
    title: string;
    date: string; // YYYY-MM-DD
    read: string; // e.g. "5 MIN"
    description: string;
    body: string;
    featured?: boolean;

    seo?: {
        title?: string;
        description?: string;
        image?: string;
    };
}

export const notes: Note[] = [

    {
        slug: "the-website-maintenance-tax",
        title: "The website maintenance tax",
        date: "2026-10-29",
        read: "5 MIN",
        description:
            "Building a website is only the beginning. A look at the ongoing security, dependency and maintenance costs behind the technologies we choose.",
        featured: true,
        body: `
                ## // i updated this last week

                Recently, I had to go through several WordPress projects after they'd been compromised.

                That meant investigating what had happened, cleaning things up, updating software and making sure everything was working again.

                Not particularly exciting work. But necessary.

                A week later, I was back updating the same projects because of a critical vulnerability in PHP.

                I'd only just finished dealing with the previous problems. Now there was another reason to revisit the same websites.

                Nothing about the websites had changed. Nobody needed a new feature. The content was still the same. The websites were doing exactly what they were supposed to do.

                But the software underneath them needed attention.

                Again.

                ## // the website is finished. the software isn't

                There's an interesting assumption people make about websites.

                You build one. You launch it. Maybe update the content occasionally. That's it.

                Except that's not really how software works.

                WordPress needs updates. Plugins need updates. Themes need updates. PHP needs updates. The server needs maintaining. And sometimes an update to one thing causes problems with something else.

                None of this is particularly surprising to a developer.

                But it's easy to forget about when choosing how to build a website in the first place.

                The cost of a website isn't just what it takes to build it. It's what it takes to keep it running.

                ## // another dependency, another responsibility

                WordPress isn't inherently a bad choice. Neither is PHP.

                Both power an enormous number of websites, and there's a reason for that. They're accessible, flexible and have mature ecosystems.

                But that flexibility comes with dependencies.

                A WordPress installation might depend on several plugins, a theme, a particular PHP version and whatever configuration the hosting provider uses.

                Each of those components has its own lifecycle.

                And just because your website hasn't changed doesn't mean those dependencies have stopped changing.

                That's the part I find interesting.

                You can have a website that hasn't needed a single feature update in years, yet still requires regular technical attention.

                You're maintaining software that exists primarily to serve content that might barely change.

                Sometimes that's a perfectly reasonable trade-off.

                Sometimes it isn't.

                ## // security is not optional maintenance

                The recent PHP vulnerabilities were a good reminder that this isn't just about keeping things tidy.

                Sometimes an update isn't optional.

                A critical vulnerability doesn't particularly care whether you're busy, whether the client has a maintenance budget or whether the website has been touched in six months.

                The software is vulnerable. It needs fixing.

                And that's true whether the website receives ten visitors a day or ten thousand.

                Of course, this isn't unique to PHP. Every software stack has vulnerabilities. JavaScript dependencies need patching. Frameworks release security updates. Servers need maintaining.

                Switching technologies doesn't make security disappear.

                But architecture determines how much software you're responsible for, how many moving parts exist and how often you need to intervene.

                That's worth thinking about before choosing a stack.

                ## // could this have been a static website?

                This is the question I kept coming back to.

                How many websites actually need all of this?

                If a website consists of a homepage, some service information, a contact page and a handful of articles, does it really need a PHP runtime, a database, a CMS and a collection of plugins?

                Maybe.

                If someone needs to log in and update content regularly, WordPress might be exactly the right tool.

                But if the content changes twice a year, there are simpler ways to serve those pages.

                A static website still needs maintaining. Hosting platforms have their own responsibilities. Build tools and dependencies can still have vulnerabilities.

                But there's a difference between maintaining a build process and maintaining an internet-facing application with a database, authentication and executable server-side code.

                Removing unnecessary moving parts reduces the number of things that can go wrong.

                That's not a guarantee of security.

                It's just a smaller problem to manage.

                ## // boring maintenance is still engineering

                I think developers naturally prefer building things.

                New features. New projects. New technologies. Something interesting to solve.

                Nobody gets particularly excited about spending an afternoon updating plugins and checking that nothing broke.

                But maintaining software is part of engineering.

                Security patches, backups, dependency upgrades and monitoring aren't separate from the product. They're part of what it takes to operate it.

                The problem is when we choose a system without properly considering that responsibility.

                A tool that saves a few hours during development might introduce years of maintenance.

                That doesn't automatically make it a bad choice.

                It just means the initial development cost was never the whole calculation.

                ## // choose what you're willing to maintain

                I've written before about whether every website actually needs a CMS.

                After the last couple of weeks, I think there's another question worth asking.

                What are you willing to maintain?

                Because every decision comes with a cost.

                A CMS gives you an interface for managing content, but introduces software that needs updating.

                A custom application gives you control, but makes you responsible for the code.

                A static website reduces the runtime complexity, but might make content management less convenient.

                There isn't a universally correct answer.

                The goal isn't to avoid maintenance entirely. That's unrealistic.

                The goal is to avoid maintaining complexity that never needed to exist.

                A website isn't finished when it goes live.

                It's finished when nobody needs it anymore.

                Until then, someone has to look after it.
                `.trim(),
        seo: {
            title: "The website maintenance tax | David Whalley — Ortheyus",
            description:
                "Why website maintenance matters, how dependencies create ongoing responsibilities, and when a simpler static architecture makes sense.",
            image: "/notes/the-website-maintenance-tax/og.png",
        },
    },

    {
        slug: "do-you-need-a-cms",
        title: "Do you need a CMS?",
        date: "2026-09-10",
        read: "8 MIN",
        description:
            "Why small websites can often skip the complexity and use a database, Markdown, or a simple custom admin instead.",
        featured: true,
        body: `
                ## // what a CMS actually solves

                A CMS solves a fairly specific problem.

                You have content that changes independently of the code, and you want people to manage that content without editing the application itself.

                That's useful.

                A marketing team wants to publish a blog post without calling a developer. A newspaper has hundreds of articles. An ecommerce company has thousands of products. A company has multiple people creating and approving content.

                Those are real problems.

                A CMS is a good solution to them.

                The mistake is turning that into:

                "Every website needs a CMS."

                That's like saying every spreadsheet needs a database.

                It depends what you're doing.

                ## // the CMS tax

                A CMS isn't free.

                Not just financially. There is a maintenance cost.

                You have another system to host. Another set of credentials. Another API. Another deployment pipeline. Another dependency tree. Another place to configure authentication. Another thing that can break.

                Then there is the content model.

                You don't just write a blog post anymore.

                You create a content type.

                Then fields.

                Then relationships.

                Then slugs.

                Then previews.

                Then publishing states.

                Then webhooks.

                Then the frontend has to fetch all of it.

                Eventually you've built a small distributed system so someone can write:

                "I went for a walk today."

                Sometimes that's exactly the right trade-off.

                Sometimes it's completely unnecessary.

                ## // my website doesn't have a CMS

                This website doesn't have one.

                I write the content and put it into a database.

                That's basically it.

                There isn't a WordPress installation sitting behind it. There isn't a separate headless CMS. There isn't a complicated editorial workflow.

                The application knows what a note is.

                The database stores the note.

                The website displays the note.

                There isn't much else to solve.

                And because I built the site, I don't need a dashboard to abstract the database away from me.

                The database already is the dashboard.

                ## // but what about non-developers?

                This is where CMSs become genuinely useful.

                If I'm building a website for a client who needs to publish content themselves, telling them to open a database client and insert a row is obviously ridiculous.

                The interface matters.

                A CMS gives non-technical users a way to work with structured content without understanding how the application works underneath.

                That's valuable.

                But notice what happened.

                The requirement wasn't:

                "This website needs a CMS."

                It was:

                "Someone who isn't a developer needs to manage this content."

                That's a much better requirement.

                ## // the rise of the small website

                Something else has changed.

                AI coding tools have made it much easier to build small websites.

                You can describe what you want. Generate a frontend. Add a database. Create an admin page. Deploy it.

                For a small company or individual, that can be enough.

                You don't necessarily need a giant platform.

                You need somewhere to put the data and somewhere to edit it.

                A developer can build that in an afternoon.

                The interesting part is that the boundary between "application" and "CMS" starts to disappear.

                Your website can just have an /admin page.

                Log in.

                Create a post.

                Save it.

                Done.

                That's a CMS.

                It's just one you built instead of buying.

                ## // vibe coding changes the calculation

                This is where I think things get interesting.

                For years, the argument for using an established CMS was partly about development cost.

                Why build a content management system when someone has already built one?

                That's still true for many projects.

                But the cost of building a small internal tool has fallen dramatically.

                If AI can generate a database schema, an admin form, authentication and a few CRUD endpoints in an afternoon, the calculation changes.

                You're no longer comparing:

                CMS: £0 and five minutes Custom system: £50,000 and six months

                You're sometimes comparing:

                CMS: another service with its own concepts and limitations Custom system: a few hundred lines of code that do exactly what you need

                That's a very different decision.

                ## // the danger of building everything yourself

                There is, however, an obvious trap.

                Just because you can build something doesn't mean you should.

                Authentication is boring until it isn't.

                Permissions are easy until there are three different types of users.

                Backups are easy until you need the backup.

                Version history sounds simple until someone deletes an important article.

                Media management becomes annoying surprisingly quickly.

                Publishing workflows get complicated.

                So does localisation.

                So does scheduling.

                So does search.

                This is why CMSs exist.

                Someone already paid the complexity tax.

                ## // boring is sometimes good

                There's a tendency in software to treat custom-built things as automatically better.

                They're not.

                A mature CMS is boring.

                That's often its greatest feature.

                It has been around for years. People know how it works. There are plugins. There are integrations. There are migration tools. There are people who have already solved the problems you're about to discover.

                If your requirements match what the CMS does well, use it.

                Don't build your own CMS because building software is fun.

                That's how you end up maintaining your own WordPress.

                ## // the smallest useful system

                I think the better question is:

                What is the smallest system that solves the problem?

                For a personal blog, that might be Markdown files.

                For my website, it might be a database and a simple admin interface.

                For a five-person marketing team, it might be a headless CMS.

                For a newspaper, it probably needs to be something much more sophisticated.

                There isn't a correct answer.

                There is only the amount of complexity you actually need.

                ## // content is data

                One reason I think this is becoming more interesting is that we're getting better at separating content from the software that displays it.

                A blog post is data.

                A product is data.

                A case study is data.

                A page is data.

                The CMS is just one possible interface for managing that data.

                Once you think about it that way, a CMS starts looking less like a mandatory part of a website and more like a tool you choose when the content management problem warrants it.

                That's a useful distinction.

                ## // when you probably need one
                - multiple people need to publish content
                - non-developers need to manage the site
                - you have a large amount of structured content
                - you need editorial workflows
                - you need drafts, approvals and scheduled publishing
                - you need localisation
                - you need a media library
                - content is a significant part of the business

                ## // when you probably don't
                - you're the only person publishing
                - the site is small
                - content changes occasionally
                - you control the code
                - a database or Markdown files are enough
                - there is no complicated editorial workflow

                ## // my prediction
                I don't think CMSs are going away.

                Large organisations will continue to need them. Content teams will continue to need good editorial tools. Complex websites will continue to have complex content requirements.

                But I think we're going to see a lot more websites without traditional CMSs.

                Small companies. Personal sites. Documentation. Landing pages. Blogs. Internal tools.

                AI-assisted development makes it increasingly cheap to build a small application around exactly the content model you need.

                The interesting part isn't that developers can now build their own CMS.

                It's that they might not need to call it a CMS.

                It can just be part of the website.

                A database.

                A form.

                A few API routes.

                That's enough.

                The question was never really:

                "Does this website need a CMS?"

                It was:

                "Who needs to manage this content, and what is the simplest system that lets them do it?"

                Sometimes the answer is a CMS.

                Sometimes the answer is a database.

                And sometimes the answer is a Markdown file.

                You don't need a CMS.

                You need to solve the problem.
                `.trim(),
        seo: {
            title: "Do you need a CMS? | David Whalley — Ortheyus",
            description:
                "Do you need a CMS? Exploring when traditional CMSs are necessary and when simpler solutions suffice.",
            image: "/notes/do-you-need-a-cms/og.png",
        },
    },

    {
        slug: "is-ai-a-bubble",
        title: "Is AI a bubble?",
        date: "2026-08-11",
        read: "6 MIN",
        description:
            "Some of it is. The technology isn't. Expect valuations to come back to earth and useful AI to become infrastructure.",
        featured: true,
        body: `
                Generative AI has been moving at a ridiculous pace.

                Since ChatGPT landed in late 2022, we've gone from "look what this thing can do" to billions in investment, companies rebuilding products around models, and executives being asked what their AI strategy is.

                Which makes the obvious question worth asking:

                Are we watching a technological revolution, or another bubble?

                Probably both.

                The mistake is assuming that if the market is a bubble, the technology must be one too.

                ## // why it looks like a bubble

                The pattern is familiar.

                A new technology arrives. Everyone gets excited. Money follows the excitement. Valuations detach from revenue. Suddenly every company has an AI strategy, whether it needs one or not.

                We've seen this movie before with dot-coms, crypto, NFTs and the metaverse.

                AI has some of the same symptoms.

                Companies are being valued on what they might eventually become rather than what they're earning today. Start-ups are raising enormous amounts of money while still figuring out what their actual product is.

                That's usually where things get uncomfortable.

                Then there's the cost.

                Training and running frontier models requires extraordinary amounts of compute, hardware and electricity. The models are getting more efficient, but "more efficient" doesn't mean "cheap".

                The economics still have to work.

                And impressive demos aren't the same thing as profitable businesses.

                A model that can write an email in three seconds is interesting.

                A system that reliably saves a company £10m a year is a business.

                We're still figuring out how much of the former becomes the latter.

                ## // the expensive bit

                - huge amounts of GPU/compute capacity hardware
                - significant hardware requirements
                - expensive chips and data-centre equipment
                - significant electricity requirements
                - expensive specialist researchers and engineers
                - extremely high investor/customer expectations revenue

                The interesting question isn't whether AI is useful.

                It obviously is.

                The question is whether the value being created is large enough to justify the enormous amount of capital being spent to create it.

                Some companies will prove that it is.

                Some won't.

                That's what a correction looks like.

                ## // the bubble isn't the technology

                The internet was a bubble.

                The internet wasn't a mistake.

                The dot-com crash destroyed huge amounts of paper wealth and killed thousands of companies. It also left behind infrastructure that eventually became the foundation of the modern economy.

                AI can follow the same path.

                The market can dramatically overestimate the value of individual companies while simultaneously underestimating the long-term importance of the underlying technology.

                Both things can be true.

                In fact, they're probably going to be.

                ## // people are already getting value

                The strongest argument against "AI is just hype" is that people are actually using it.

                Developers are writing code faster.

                Support teams are automating repetitive conversations.

                Marketing teams are generating and testing content.

                Researchers are processing documents and datasets.

                Lawyers and analysts are using models to accelerate research.

                The gains aren't theoretical anymore.

                They're not necessarily revolutionary either.

                A 20% improvement in a boring workflow is still a 20% improvement.

                And boring improvements compound.

                ## // the technology is moving too fast

                One of the stranger things about the current AI cycle is how quickly the baseline keeps moving.

                Better reasoning.

                Better multimodal capabilities.

                Smaller models.

                Lower inference costs.

                Faster hardware.

                Longer context windows.

                Better tooling.

                Every time the economics start looking difficult, the technology changes the equation again.

                That doesn't guarantee that the current valuations are justified.

                It does make the underlying technology difficult to dismiss.

                ## // what probably happens next

                I don't think the most likely outcome is:

                AI 🚀 → AI 💥 → AI disappears

                It's closer to:

                AI 🚀 ↓ too much money ↓ too many companies ↓ reality arrives ↓ consolidation ↓ useful products survive ↓ AI becomes boring

                And honestly, the last step is the interesting one.

                The biggest technologies eventually stop feeling like technology.

                Nobody talks about whether their company should "adopt the internet" anymore.

                It's just there.

                AI is likely heading in the same direction.

                ## // ROI becomes the filter

                The first phase was about experimentation.

                Companies wanted to understand what AI could do.

                The next phase is going to be much less forgiving.

                The questions become:

                How much does it cost?

                How accurate is it?

                How much time does it save?

                How much revenue does it create?

                Can we trust it with real work?

                What happens when it gets something wrong?

                That's a much better environment for good products.

                It's also a terrible environment for companies whose entire pitch is "we have AI".

                ## // smaller models, sharper tools

                I don't think the future is necessarily one enormous model doing everything.

                There will be plenty of those.

                But there will also be smaller, specialised systems that are cheaper, faster and easier to control.

                A model trained for one domain doesn't need to know everything.

                It needs to know enough about the thing you actually care about.

                That can mean better accuracy, lower costs, stronger privacy and fewer compliance headaches.

                The future of AI probably looks less like one giant brain and more like a collection of increasingly useful tools.

                ## // follow the picks and shovels

                There's another lesson from previous technology cycles.

                You don't necessarily want to own the company making the most exciting application.

                Sometimes you want to own the thing everyone needs to build the applications.

                Cloud infrastructure.

                Chips.

                Data platforms.

                Model hosting.

                Security.

                Observability.

                MLOps.

                The companies building the foundations can benefit regardless of which individual AI application wins.

                The gold rush has always been good for shovel sellers.

                ## // the uncomfortable bits

                AI still has plenty of problems that don't disappear because the models get better.

                Copyright.

                Privacy.

                Hallucinations.

                Bias.

                Security.

                Deepfakes.

                Regulation.

                Accountability.

                The technical capability to generate an answer is not the same thing as having a system you should trust with an important decision.

                That's why governance isn't going to be a side project.

                As AI moves into production, knowing when not to trust the model becomes almost as important as knowing how to use it.

                ## // what businesses should actually do

                Don't adopt AI because everyone else is.

                Find an expensive, repetitive or frustrating problem.

                Measure it.

                Try AI.

                Measure it again.

                If it works, keep it.

                If it doesn't, remove it.

                That's the strategy.

                Not:

                "We need an AI strategy."

                But:

                "We have a problem. Can AI solve it better?"

                The technology is powerful.

                It is not magic.

                ## // my prediction

                Some AI companies are going to disappear.

                Some valuations are going to look ridiculous in hindsight.

                Some investors are going to lose a lot of money.

                There will probably be a correction.

                And none of that means AI was a bubble.

                The useful distinction is between an AI bubble and a bubble in AI companies.

                The second is almost inevitable.

                The first is much harder to argue.

                AI is already producing measurable productivity gains, changing software development, reshaping knowledge work and creating entirely new products.

                The hype will eventually become boring.

                That's usually what happens when something becomes real.

                The winners won't necessarily be the companies with the biggest models or the loudest announcements.

                They'll be the ones that turn increasingly capable technology into something people actually need.

                The bubble can burst.

                AI probably won't.

                `.trim(),
        seo: {
            title: "Is AI a bubble? | David Whalley — Ortheyus",
            description:
                "Is AI a bubble? David Whalley's thoughts on the distinction between an AI bubble and a bubble in AI companies.",
            image: "/notes/is-ai-a-bubble/og.png",
        },
    },

    {
        slug: "boring-stacks-win",
        title: "Boring stacks win",
        date: "2024-11-12",
        read: "4 MIN",
        description:
            "Why I default to Postgres + a server-rendered framework, and only deviate when there's a real reason.",
        featured: false,
        body: `
                Every project comes with a fixed novelty budget. You can spend it on the database, the deployment story, the framework, the language — or on the thing you're actually being paid to build. Spend it on the product.

                ## // what 'boring' actually means
                Boring isn't a synonym for old. It means: well-documented, predictable failure modes, a large pool of engineers who've already debugged this exact stack trace at 2am. Postgres is boring. A server-rendered framework is boring. Object storage behind a CDN is boring.

                When something breaks in a boring stack, the first Google result is almost always the answer. When something breaks in a novel stack, you're the first Google result — and you have to write it yourself, while production is on fire.

                ## // my default
                - Postgres/ the database, always
                - Next.js/ or TanStack Start
                - Tailwind/ styling
                - Resend/ transactional email
                - Stripe/ payments
                - Cloudflare/ CDN + edge functions

                I deviate from this only when there's a concrete reason — a workload that genuinely needs a different shape, not because something new showed up on Hacker News last week.

                ## // when to break the rule
                Boring stacks lose when the product itself is the novelty: realtime collaborative editing, ML inference at the edge, anything with hard latency budgets. Then the interesting tech is the point. Everywhere else, boring wins on every axis that matters once a project is older than six months.

                > Choose boring technology. — Dan McKinley

                The best compliment a stack can get is that nobody ever has to talk about it.
                `.trim(),
        seo: {
            title: "Boring stacks win | David Whalley — Ortheyus",
            description:
                "Why boring technology stacks often win in the long run.",
            image: "/notes/boring-stacks-win/og.png",
        },
    }

];
