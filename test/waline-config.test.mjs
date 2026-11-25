import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

const workflowFile = new URL('../.github/workflows/deploy.yml', import.meta.url)
const componentFile = new URL('../.vitepress/theme/components/WalineComments.vue', import.meta.url)

test('passes the public Waline server URL into the production build', async () => {
  const workflow = await readFile(workflowFile, 'utf8')

  assert.match(
    workflow,
    /- name: Build site\r?\n\s+env:\r?\n\s+VITE_WALINE_SERVER_URL:\s+\$\{\{\s*vars\.VITE_WALINE_SERVER_URL\s*\}\}\r?\n\s+run: npm run docs:build/,
  )
})

test('configures nickname and email without a removed client avatar option', async () => {
  const component = await readFile(componentFile, 'utf8')
  assert.match(component, /\s:serverURL="serverURL"/, 'Waline requires the exact serverURL prop name')

  assert.match(component, /:required-meta="\['nick', 'mail'\]"/)
  assert.match(component, /login="disable"/)
  assert.doesNotMatch(component, /\s:avatar=/)
})
