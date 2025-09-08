# Logging Middleware

## 📌 Overview
This folder contains a reusable **logging middleware** that captures and sends structured logs to the evaluation service.  
It replaces `console.log` with a centralized function that ensures consistency and makes debugging/monitoring easier.

---

## 🛠️ File Structure

- Logs are sent to:  
  `http://20.244.56.144/evaluation-service/logs`
- Authorization via token stored in `.env`:
- Supports multiple log levels:
- `debug`, `info`, `warn`, `error`, `fatal`
- Categorized by package type:
- `api`, `component`, `hook`, `page`, `state`, `style`, `auth`, `config`, `middleware`, `utils`

---

## 📖 Usage Example
```ts
import { Log } from './logger';

// Log a successful event
await Log('frontend', 'info', 'api', 'Shortened URL created successfully');

// Log an error
await Log('frontend', 'error', 'component', 'Failed to render URL list');
