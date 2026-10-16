---
title: "Zero-Port-Exposure Infrastructure with Docker & Cloudflare Tunnels"
subtitle: "A pragmatic deployment blueprint for lean full-stack teams"
description: "How to run high-availability Next.js and Express workloads on Linux servers using Cloudflare Zero Trust tunnels, GitHub Actions, and automated container rollbacks."
pubDate: 2026-09-18
category: "DevOps & Edge"
readingTime: "5 min read"
featured: true
tags: ["DevOps", "Cloudflare", "Docker", "Security"]
---

For many independent engineers and lean product teams, cloud infrastructure swings between two uncomfortable extremes: paying steep per-seat and bandwidth premiums on managed PaaS platforms, or spending weekends hardening raw Linux firewalls against relentless automated port scans.

Over the past two years managing domains and production services on Cloudflare and containerized Linux nodes, I have converged on a clean middle ground: **Zero-Ingress Container Topologies**.

## The Core Principle: Close All Public Ports

Traditionally, deploying a web stack meant opening ports `80` and `443` (and often `22` for SSH) to `0.0.0.0/0`, configuring Nginx reverse proxies, and managing Let's Encrypt cron jobs.

By running `cloudflared` as an outbound-only daemon inside your Docker Compose network, your origin server initiates an encrypted tunnel *outward* to Cloudflare's edge network:

```yaml
services:
  api-core:
    image: ghcr.io/thanhdora/api-core:${GIT_SHA}
    restart: unless-stopped
    networks:
      - internal_atelier
    healthcheck:
      test: ["CMD", "wget", "--spider", "-q", "http://localhost:4000/healthz"]
      interval: 10s
      timeout: 3s
      retries: 3

  edge-tunnel:
    image: cloudflare/cloudflared:latest
    restart: unless-stopped
    command: tunnel --no-autoupdate run
    environment:
      - TUNNEL_TOKEN=${CLOUDFLARE_TUNNEL_TOKEN}
    networks:
      - internal_atelier
    depends_on:
      api-core:
        condition: service_healthy
```

With this topology:

- **No public IP exposure:** Your server firewall (`ufw` or cloud security group) can drop 100% of inbound TCP/UDP traffic.
- **Edge WAF & DDoS protection:** Malicious traffic is absorbed at the nearest Cloudflare POP before ever reaching your Node.js or Next.js runtime.
- **Zero-Trust SSH:** Even administrative access can be gated behind short-lived identity tokens rather than static SSH keys exposed on port 22.

## Fast, Predictable CI/CD via GitHub Actions

Combined with GitHub Actions, every push to `main` runs type checks, builds a minimal multi-stage Docker image, and triggers an atomic rolling update. When your infrastructure is simple enough to hold in your head, outages shrink from hours of debugging to a ten-second container rollback.
