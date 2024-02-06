---
title: Solucao Level 8 - Tutorial World
date: 2024-02-06T11:53:07-03:00
scriptstyles: ["syntax-coding"]
tags: ["codigo"]
---

Essa é a solução lógica para o desafio 8 do Tutorial World do Natural Number Game `2+2=4`:

```python
nth_rewrite 2 [two_eq_succ_one]
-- only change the second `2` to `succ 1`.
rw [add_succ]
rw [one_eq_succ_zero]
rw [add_succ, add_zero]
-- two rewrites at once
rw [← three_eq_succ_two]
-- change `succ 2` to `3`
rw [← four_eq_succ_three]
rfl
```

A solução que eu encontrei para o mesmo desafio com 12 passos.

```python
nth_rewrite 2 [two_eq_succ_one]
rw [four_eq_succ_three]
rw [add_succ]
rw [two_eq_succ_one]
rw [three_eq_succ_two]
rw [two_eq_succ_one]
rw [succ_eq_add_one]
rw [succ_eq_add_one]
rw [succ_eq_add_one]
rw [succ_eq_add_one]
rfl
```
