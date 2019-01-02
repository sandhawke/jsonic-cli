rm -f out-test
echo '[{a:b}]' | node cli.js --json >> out-test
echo '[{a:b}]' | node cli.js -j >> out-test
echo '[{a:b}]' | node cli.js --compact >> out-test
echo '[{a:b}]' | node cli.js -c >> out-test
echo '[{a:b}]' | node cli.js --jsonic >> out-test
echo '[{a:b}]' | node cli.js -s >> out-test
echo '[{a:b}]' | node cli.js --console >> out-test
echo '[{a:b}]' | node cli.js -l >> out-test
echo '[{a:b}]' | node cli.js >> out-test
cat <<EOF > out-compare
[
  {
    "a": "b"
  }
]
[
  {
    "a": "b"
  }
]
[{"a":"b"}]
[{"a":"b"}]
[{a:b}]
[{a:b}]
[ { a: 'b' } ]
[ { a: 'b' } ]
[ { a: 'b' } ]
EOF
if diff out-test out-compare; then
    echo 'pass'
fi

