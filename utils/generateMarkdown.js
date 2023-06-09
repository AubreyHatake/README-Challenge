// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
     
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "The Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";  
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string, this function is accomplished on line 35 in the generateMarkdown function.
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string, This function is also accomplished within the generateMarkdown function. 
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectName} by ${answers.userName}
  # READEME

  ## Table of Contents
 - Installation
 - About Project
${answers.license !== "None" ? "- [License](#license)" : ""}
 - Contact

  
  ### My github repo is ${answers.repoName}
  
  ${answers.license !== "None" ? "### License" : ""}
  ${answers.license !== "None" ? renderLicenseBadge(answers.license) : ""}
  
  `;
}

module.exports = generateMarkdown;
