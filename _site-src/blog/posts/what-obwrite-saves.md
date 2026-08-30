---
title: "Obwriteが保存するもの：WebからVaultまで"
description: "Obwrite v0.8.0 Early Accessで確認できる入力、操作、保存結果と、現時点で保証していない範囲を整理します。"
date: 2026-08-30
updated: 2026-08-30
slug: what-obwrite-saves
category: workflow
featured: true
draft: false
---

## 実演動画について

> 実演動画は現在準備中です。存在しない動画を再生可能であるかのようには表示していません。公開後、この位置から確認できるようにします。

Obwriteは、Google Chromeで閲覧している対応ページを読み取り、ローカルのObsidian Vaultへ保存するWindowsデスクトップアプリです。

## 基本の流れ

1. Obwriteを起動します。
2. ObwriteからChromeを起動し、保存したい対応ページを開きます。
3. Obwriteが表示した内容とメディアを確認します。
4. `Write`を押してObsidian Vaultへ保存します。

## X.comで保存対象となるもの

現行のv0.8.0 Early Accessでは、次を正式対応範囲としています。

- ポスト本文
- オリジナル画像
- オリジナル動画
- 保存元を確認するためのURL

## フリマサイトで保存対象となるもの

メルカリ、Yahoo!フリマ、楽天ラクマでは、商品画像を正式対応範囲としています。

## 現時点で保証していないこと

- すべてのページ構造やメディア形式に対する永久的な互換性
- macOS、Linux、スマートフォンでの動作
- 削除済みで閲覧できないページの復元
- バックグラウンドでの自動巡回

Obwriteは、現在閲覧できる単一ページを、ユーザーの操作によって保存するためのツールです。
