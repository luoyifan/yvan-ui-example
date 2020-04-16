live-server ^
  --ignore=src/*.ts ^
  --port=9090 ^
  --wait=999999999 ^
  --proxy=/yvanui:http://localhost:9529/yvanui
  --mount=/dist2:../node_modules/yvan-ui/dist
