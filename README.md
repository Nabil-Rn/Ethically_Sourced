# Ethically_Sourced

## Bell Geekfest Hackathon Project

### Table of Contents
- [Overview](#overview)
- [Prototype](#prototype)
- [Final Product](#final-product)
- [Target Audience](#target-audience)
- [Team Members](#team-members)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**Ethically_Sourced** is a project developed for the Bell Geekfest Hackathon. It is designed to enhance web security by checking the authenticity of URLs and ensuring that users are directed to safe and verified websites. The project aims to create a locally hosted web application and, ultimately, a web extension to provide a safer browsing experience.

---

## Prototype

The initial concept of the project includes:

- A locally hosted web application that checks links and redirects users to a verification page if the URL is in Google's Safe Browsing blacklist.
- Users will have the option to view various information about the link and choose whether to proceed or not.

---

## Final Product

The final goal of **Ethically_Sourced** is to develop a web extension that will automatically perform the following actions:

- Automatically check the authenticity of links when users click on them.
- Redirect users to a verification page for non-whitelisted URLs.
- Maintain a whitelist of verified URLs for an improved and safer browsing experience.

---

## Target Audience

This project is intended for:

- **Company Employees**: Individuals whose device safety is vital for the protection of a company's sensitive data. It is especially useful in corporate environments to mitigate the risk of users accessing malicious or unverified websites.

---

## Team Members

The following team members have contributed to this project:

- **[Nabil Ramadan](https://github.com/Nabil-Rn)**
- **[Yaman](https://github.com/ZYMNZ)**
- **[Natt](https://github.com/nattdecodes)**
- **[Daniel](https://github.com/DatPika)**

---

## Getting Started

Before you can use this project, you'll need to set up the required environment. Follow these steps:

1. **Clone the Repository**: Start by cloning this repository to your local machine.

2. **Install Dependencies**: Make sure you have all the necessary dependencies installed.

3. **API Key**: You will need a Google Safe Browsing API key. Obtain one from the Google Cloud Console and replace 'AIzaSyDy8guNmoR0XynEQRLojTUdtVP8XgO7gRY' in the code with your API key.

# Usage
To use this project, follow these steps:

Open the locally hosted web application or the web extension.

Click on any link.

The system will automatically check the link's authenticity and redirect you to a verification page if the URL is not on the whitelist.

Review the information provided on the verification page and make a decision to proceed or not.

```shell
npm install
