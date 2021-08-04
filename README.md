# video-proxy

Connect to it via `/admin` 
Username: `cloudhub`
Password: Set via `ENV_PASS`

Deploy on Azure: 
```bash
az group create --name test --location easteurope
az container create --resource-group test --name mycontainer --image illuspas/node-media-server --dns-name-label test-video-stream --ports 1935 8000
az container delete --resource-group test --name mycontainer
```
