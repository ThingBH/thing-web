<?xml version="1.0" encoding="UTF-8"?>
<!-- Makes /sitemap-index.xml and /sitemap-*.xml readable in a browser. Search engines ignore it. -->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Sitemap · thing.bh</title>
        <style>
          body { margin: 0; padding: 48px 16px; background: #fafaf9; color: #0a0a0a; font: 15px/1.5 system-ui, sans-serif; }
          main { max-width: 960px; margin: 0 auto; }
          h1 { font-size: 32px; margin: 0 0 4px; letter-spacing: -0.02em; }
          p { color: #57534e; margin: 0 0 32px; }
          table { width: 100%; border-collapse: collapse; }
          th, td { text-align: left; padding: 10px 12px 10px 0; border-bottom: 1px solid #e7e5e4; vertical-align: top; }
          th { font-size: 13px; color: #57534e; font-weight: 600; }
          a { color: inherit; overflow-wrap: anywhere; }
          .alt a { color: #57534e; margin-right: 12px; }
        </style>
      </head>
      <body>
        <main>
          <xsl:choose>
            <xsl:when test="s:sitemapindex">
              <h1>Sitemap index</h1>
              <p><xsl:value-of select="count(s:sitemapindex/s:sitemap)"/> sitemap file(s)</p>
              <table>
                <tr><th>Sitemap</th></tr>
                <xsl:for-each select="s:sitemapindex/s:sitemap">
                  <tr><td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td></tr>
                </xsl:for-each>
              </table>
            </xsl:when>
            <xsl:otherwise>
              <h1>Sitemap</h1>
              <p><xsl:value-of select="count(s:urlset/s:url)"/> pages</p>
              <table>
                <tr><th>Page</th><th>Languages</th></tr>
                <xsl:for-each select="s:urlset/s:url">
                  <tr>
                    <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                    <td class="alt">
                      <xsl:for-each select="xhtml:link">
                        <a href="{@href}"><xsl:value-of select="@hreflang"/></a>
                      </xsl:for-each>
                    </td>
                  </tr>
                </xsl:for-each>
              </table>
            </xsl:otherwise>
          </xsl:choose>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
