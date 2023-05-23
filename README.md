# as-webhook

`npm install`

`npm start` o ... `node .`

Una vez que el server levanta, hacer una petición `POST` a `http://localhost:3000/webhook` con cualquier objeto json...

```
{
    "id": 139911,
    "camp_id": 253,
    "email": "abc@example.com",
    "campaign_name": "Campaign ABC",
    "date_sent": "2023-05-22 11:30:50", 
    "date_event":"2023-05-22 11: 49: 15",
    "event": "clicked",
    "tag": "abc",
    "ts_sent": 1564479050,
    "ts_event": 1564479555,
    "URL": "www.example.com",
    "ts": 1564466956
}
```
