<script>
    import SvelteMarkdown from "svelte-markdown";
    /**
   * @type {any}
   */
     export let source;
</script>

<div class="markdown-container">
    <SvelteMarkdown source={source} />
</div>

<style lang="scss" global>
    .markdown-container {
        pre,
        code {
            font-family: Menlo, Monaco, "Courier New", monospace;
            // color: white;
        }

        pre {
            padding: .5rem 1rem;
            line-height: 1.25rem;
            overflow-x: auto;
            // margin: 20px;
            border-radius: 2px;
            font-size: 1rem;
            
        }

        a {
            text-decoration: none;
            color: #2980b9;
        }

        a:hover {
            text-decoration: underline;
        }

        a:focus {
            color: purple;
        }

        a:visited {
            text-decoration: none;
            color: cornflowerblue;
        }

        @media print {
            a,
            a:visited {
                text-decoration: underline;
                color: cornflowerblue;
            }

            a[href]:after {
                content: " (" attr(href) ")";
            }

            abbr[title]:after {
                content: " (" attr(title) ")";
            }

            a[href^="#"]:after,
            a[href^="javascript:"]:after {
                content: "";
            }

            pre,
            blockquote {
                border: 1px solid #999;
                page-break-inside: avoid;
            }

            thead {
                display: table-header-group;
            }

            tr,
            img {
                page-break-inside: avoid;
            }

            img {
                max-width: 100% !important;
            }

            p,
            h2,
            h3 {
                orphans: 3;
                widows: 3;
            }

            h2,
            h3 {
                page-break-after: avoid;
            }
        }

        .retro-no-decoration {
            text-decoration: none;
        }

        p,

        .retro-p {
        font-size: 1.3rem;
        margin-bottom: 1.3rem;
        line-height: 1.5rem;
        }

        li {
            margin-bottom: 0.8rem;
            font-size: 1.3rem;
            line-height: 1.5rem;
        }

        ul {
            list-style-type: square;
            padding-left: 2.3rem
        }

        ul ul {
            list-style-type: circle;
            padding-left: 2rem;

        }

        h1,
        .retro-h1,
        h2,
        .retro-h2,
        h3,
        .retro-h3,
        h4,
        .retro-h4 {
            margin: 1.414rem 0 .5rem;
            font-weight: inherit;
            line-height: 1.42;
        }

        h1,
        .retro-h1 {
            margin-top: 0;
            font-size: 3.998rem;
        }

        h2,
        .retro-h2 {
            font-size: 2.827rem;
        }

        h3,
        .retro-h3 {
            font-size: 1.999rem;
        }

        h4,
        .retro-h4 {
            font-size: 1.414rem;
        }

        h5,
        .retro-h5 {
            font-size: 1.121rem;
        }

        h6,
        .retro-h6 {
            font-size: .88rem;
        }

        small,
        .retro-small {
            font-size: .707em;
        }

        /* https://github.com/mrmrs/fluidity */

        img,
        canvas,
        iframe,
        video,
        svg,
        select,
        textarea {
            max-width: 100%;
        }

        pre {
            background-color: #333;
            color: white;
        }

        blockquote {
            border-left: 3px solid #aaa;
            padding-left: 1rem;
            margin-left: 2rem;
            // border-radius: 5px;
        }
    }
</style>