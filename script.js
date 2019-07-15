  process.stdin.setEncoding('utf-8');

  //działa znakomicie
  process.stdin.on('readable', function () {
      var input = process.stdin.read();
      if (input !== null) {
          var instruction = input.toString().trim();

          switch (instruction) {
              case '/exit':
                  process.stdout.write('\nQuitting app!\n');
                  process.exit();
                  break;
              case '/ver':
                  process.stdout.write('\nNode.js Version\n')
                  process.stdout.write(process.version + '\n');
                  break;
              case '/lang':
                  process.stdout.write('\nOS Version\n');
                  process.stdout.write(process.env.OS + '\n');
                  break;
              default:
                  process.stderr.write('Wrong instruction!\n');
          }
      }
  });