---
title: "Scaler"
excerpt: "A fault-tolerant distributed computing framework built with Go, Kubernetes, and gRPC."
collection: portfolio
permalink: /portfolio/scaler/
---

Scaler is a distributed task-execution framework designed around explicit coordination, failure recovery, and resource ownership.

The system separates scheduling and worker responsibilities, communicates over gRPC, and runs each component in Kubernetes. It tracks worker health, assigns tasks according to available capacity, and recovers work when nodes become unavailable. The project was an opportunity to reason directly about failure modes, communication boundaries, load distribution, and the operational behavior of a multi-node service.

[Repository](https://github.com/CSCI555-Spring25/Scaler)
