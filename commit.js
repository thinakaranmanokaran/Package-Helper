const { execSync } = require('child_process');
const fs = require('fs');

// Update the README.md file (or any other file)
const updateFile = () => {
  const content = `## Daily Commit Update\n\nUpdated at: ${new Date().toISOString()}`;
  fs.writeFileSync('README.md', content, 'utf8');
  console.log('README.md updated!');
};

// Run git commands to add, commit, and push
const commitChanges = () => {
  try {
    execSync('git config --global user.email "your-email@example.com"');
    execSync('git config --global user.name "Your Name"');

    execSync('git add README.md'); // Or any other file
    execSync('git commit -m "Daily auto-commit"');
    execSync('git push');
    console.log('Changes committed and pushed successfully.');
  } catch (error) {
    console.error('Error during commit and push:', error);
  }
};

// Perform the actions
updateFile();
commitChanges();
