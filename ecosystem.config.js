module.exports = {
  apps: [
    {
      name: 'next_js',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/next/dist/bin/next',
      script: 'yarn',
      args: 'start',
      exp_backoff_restart_delay: 100, // optional, adjust as needed
      watch: true, // optional, adjust as needed
      max_memory_restart: '400M', // optional, adjust as needed
    },
  ],
};
