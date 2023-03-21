
function generateHTML(employeeDirectory) {
    // Define the HTML template for each employee card
    const cardTemplate = (employee) => {
      return `
        <div class="card">
          <h2>${employee.getName()}</h2>
          <p>Role: ${employee.getRole()}</p>
          <p>ID: ${employee.getId()}</p>
          <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
          ${employee.getRole() === 'Manager' ? `<p>Office Number: ${employee.getOfficeNumber()}</p>` : ''}
          ${employee.getRole() === 'Engineer' ? `<p>GitHub: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></p>` : ''}
          ${employee.getRole() === 'Intern' ? `<p>School: ${employee.getSchool()}</p>` : ''}
        </div>
      `;
    }
  
    // Generate the HTML for each employee card and concatenate them into a single string
    const employeeCards = employeeDirectory.map((employee) => cardTemplate(employee)).join('');
  
    // Generate the full HTML page by wrapping the employee cards in an HTML boilerplate
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>My Team</title>
          <link rel="stylesheet" href="./style.css">
        </head>
        <body>
          <header>
            <h1>My Team</h1>
          </header>
          <main>
            ${employeeCards}
          </main>
        </body>
      </html>
    `;
  }
module.exports = generateHTML