
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
            image: "/og/og-notes.png",
        },
    },

];
