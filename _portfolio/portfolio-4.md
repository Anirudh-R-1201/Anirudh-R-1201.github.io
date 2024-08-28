---
title: "Chess AI"
excerpt: "A chess AI bot using Min Max algorithm optimised with branch pruning.<br><img src='/images/chess.png' height='600' width='600'>"
collection: portfolio
---
 
Based on a user input depth value, which would specify the number of moves that will be made that is to be computed, the algorithm would construct a Min Max tree, and perform the best action. Unique weights are assigned to the values of the pieces, the safety of the king to enable decision making and each of the 64 squares on the board as per the data collected by chess.com on thousands of games played online. Branch pruning was added to optimise the tree by stopping calculations on a branch that has already been performing worse than a given threshold. 

[Repository](https://github.com/Anirudh-R-1201/Chess-AI)