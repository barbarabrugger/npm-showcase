---
id: 0m843mwyu31r0njyveayt9c
title: UI Testing
desc: ''
updated: 1649013206675
created: 1649013206675
stub: false
isDir: false
---
[Playwright](https://playwright.dev/)

End-to-End testing for modern web apps.

Playwright compared to WebdriverIO: <https://dev.to/hariclerry/evaluation-of-microsoft-playwright-28oi>

- Faster than Selenium/WebdriverIO
- Simpler Code
- Supports any browser on any platform in any context and any programming language
- Microsoft project

## Getting started

- [Java](https://playwright.dev/java/docs/intro)
- [Node.js](https://playwright.dev/docs/intro)

## Configuration

POM:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>org.example</groupId>
  <artifactId>examples</artifactId>
  <version>0.1-SNAPSHOT</version>
  <name>Playwright Client Examples</name>
  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  </properties>
  <dependencies>
    <dependency>
      <groupId>com.microsoft.playwright</groupId>
      <artifactId>playwright</artifactId>
      <version>1.17.1</version>
    </dependency>
  </dependencies>
  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.1</version>
        <configuration>
          <source>1.8</source>
          <target>1.8</target>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```

## Commands

Record tests (Java/Maven):

`mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen localhost:8081"`
