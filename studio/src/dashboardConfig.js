export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "623795fedbdc7923449c2ddc",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-chtomwxa",
                  apiId: "0451b506-ebd4-4693-a9e0-513d36917eda",
                },
                {
                  buildHookId: "623795fe04e8324a4621711f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-h747wzk2",
                  apiId: "4b7ba784-2b59-4a3f-a11d-152afa81aedc",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/rondoupo/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-h747wzk2.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
