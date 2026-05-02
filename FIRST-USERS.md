# Sinyx First-User Playbook

Goal: get the first real users who need agent-ready web context, not generic scraping.

## Who To Target First

Best early users:

- Developers building MCP tools, coding agents, research agents, or RAG ingestion flows.
- Indie hackers adding AI features to existing SaaS products.
- Documentation/search builders who need clean public docs in prompts or vector stores.
- Agencies building automations where user-provided URLs need safer extraction.

Avoid broad scraper buyers at the start. They compare only on price and volume. Sinyx should lead with agent context, source signals, and MCP readiness.

## What To Say

Position Sinyx as:

> A small API and MCP server that turns public URLs into agent-ready context: Markdown, chunks, citation, freshness, and quality signals.

Do not lead with:

- "URL to Markdown"
- "web scraping"
- "cheapest extraction"
- "better than Firecrawl/Jina/Tavily"

Those frames pull Sinyx into crowded comparison. Lead with the agent output contract.

## First Outreach Message

```text
Hey, I saw you are building with AI agents/RAG.

I am building Sinyx: an API + MCP server that turns public URLs into agent-ready context.

Instead of returning only Markdown, it returns Markdown, chunks, citation, freshness, and quality signals in one response:
https://sinyx.me/start

If you have a workflow where an agent needs to read public docs/articles/pages, I would love your feedback on whether the context response shape is useful.
```

## Shorter Reply Version

```text
Sinyx might fit this if your agent needs to read public web pages.

It returns agent-ready context: Markdown, chunks, citation, freshness, and quality.

Quickstart: https://sinyx.me/start
```

## Where To Look

Start manually with conversations, not ads:

- GitHub issues/discussions where people ask how to give agents web/docs context.
- Indie hacker posts about adding RAG, docs search, or AI assistants.
- MCP/Cursor/Codex/Claude Code users asking how to connect external data.
- RapidAPI users already searching for extraction, Markdown, RAG, or web-to-text APIs.

## Success Criteria

The first milestone is not scale. It is proof that a real builder says:

- "I understand what Sinyx does."
- "The context format is easier than wiring this myself."
- "I would use this in an agent/RAG workflow."

Track:

- 10 direct conversations.
- 3 people who try `/start`.
- 1 person who makes a real RapidAPI request.
- 1 specific missing feature or pricing objection.

## Follow-Up Questions

Ask every tester:

- What are you building?
- Did `format: "context"` give the fields you expected?
- Which field matters most: Markdown, chunks, citation, freshness, or quality?
- What would stop you from using this in production?
- Would MCP setup make this more useful?

## Current Recommended Next Step

Paste `rapidapi-docs-paste.md` into the RapidAPI listing, then use `https://sinyx.me/start` as the main link in early outreach.
