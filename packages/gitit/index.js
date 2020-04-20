const lib = require('./lib');

module.exports = (config) => {
  
  return {
    parseRepo: async () => {
      const repo = lib.git(config.repo);
      await repo.sync();
      return await repo.parse();
    },
    parseProject: async (repoData) => {
      const project = lib.project(config.project);
      return project.parse(repoData);
    },
  };
}
