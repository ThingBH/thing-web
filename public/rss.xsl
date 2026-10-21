<?xml version="1.0" encoding="UTF-8"?>
<!-- Makes /blog/rss.xml and /ar/blog/rss.xml readable in a browser, styled like sitemap.xsl. Feed readers ignore it. -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:variable name="ar" select="rss/channel/language = 'ar'"/>
  <xsl:template match="/">
    <html>
      <xsl:attribute name="lang"><xsl:value-of select="rss/channel/language"/></xsl:attribute>
      <xsl:attribute name="dir"><xsl:choose><xsl:when test="$ar">rtl</xsl:when><xsl:otherwise>ltr</xsl:otherwise></xsl:choose></xsl:attribute>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>RSS · <xsl:value-of select="rss/channel/title"/></title>
        <style>
          body { margin: 0; padding: 48px 16px; background: #fafaf9; color: #0a0a0a; font: 15px/1.5 system-ui, sans-serif; }
          main { max-width: 960px; margin: 0 auto; }
          h1 { font-size: 32px; margin: 0 0 4px; letter-spacing: -0.02em; }
          p { color: #57534e; margin: 0 0 32px; }
          table { width: 100%; border-collapse: collapse; }
          th, td { text-align: start; padding: 10px 12px 10px 0; border-bottom: 1px solid #e7e5e4; vertical-align: top; }
          [dir="rtl"] th, [dir="rtl"] td { padding: 10px 0 10px 12px; }
          th { font-size: 13px; color: #57534e; font-weight: 600; }
          a { color: inherit; overflow-wrap: anywhere; }
          td small { display: block; color: #57534e; margin-top: 2px; }
          .date { color: #57534e; white-space: nowrap; }
          .date span { direction: ltr; unicode-bidi: isolate; }
        </style>
      </head>
      <body>
        <main>
          <h1><xsl:value-of select="rss/channel/title"/> · RSS</h1>
          <p>
            <xsl:choose>
              <xsl:when test="$ar">انسخ رابط هالصفحة في أي قارئ RSS عشان توصلك المقالات الجديدة. </xsl:when>
              <xsl:otherwise>Copy this page's address into any RSS reader to get new posts. </xsl:otherwise>
            </xsl:choose>
            <a href="{rss/channel/link}"><xsl:value-of select="rss/channel/link"/></a>
          </p>
          <table>
            <tr>
              <th><xsl:choose><xsl:when test="$ar">المقالة</xsl:when><xsl:otherwise>Post</xsl:otherwise></xsl:choose></th>
              <th><xsl:choose><xsl:when test="$ar">التاريخ</xsl:when><xsl:otherwise>Published</xsl:otherwise></xsl:choose></th>
            </tr>
            <xsl:for-each select="rss/channel/item">
              <tr>
                <td><a href="{link}"><xsl:value-of select="title"/></a><small><xsl:value-of select="description"/></small></td>
                <td class="date"><span><xsl:value-of select="substring(pubDate, 6, 11)"/></span></td>
              </tr>
            </xsl:for-each>
          </table>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
