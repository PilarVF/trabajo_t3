<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="cancion.css" />
			</head>
			<body>
				<h1>CANCIÓN</h1>
    			<h2>Título: <xsl:value-of select="cancion/titulo"/></h2>
    			<br/>
                <xsl:for-each select="cancion/letra/estrofa">
                	<div>
    	                <xsl:if test="tipo &#61; 'normal'">
                            <span>NORMAL</span>
                        </xsl:if>
                        <xsl:if test="tipo &#61; 'estribillo'">
                            <span>ESTRIBILLO</span>
                        </xsl:if>
                        <xsl:for-each select="verso">
                            <p>
                                <xsl:value-of select="."/>
                           </p>
                        </xsl:for-each>  
                    </div>
                    <br/>
                </xsl:for-each> 
                <p>(Autor: <xsl:value-of select="cancion/autor"/>)</p>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>