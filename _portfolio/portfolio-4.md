---
title: "SeqToPar"
excerpt: "CUDA implementations of parallel algorithms with measured comparisons to sequential execution."
collection: portfolio
permalink: /portfolio/seq-to-par/
---

SeqToPar examines what changes when familiar sequential algorithms are redesigned for GPU execution.

The project implements parallel selection and sorting workloads in CUDA, then compares execution time and scaling behavior across increasing input sizes. It explores memory access, synchronization, work partitioning, and the point at which parallel execution offsets transfer and coordination overhead.

[Repository](https://github.com/Anirudh-R-1201/SeqToPar)
