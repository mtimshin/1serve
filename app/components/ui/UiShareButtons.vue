<template>
  <div class="share">
    <span class="share__label">Поделиться</span>
    <a :href="`https://t.me/share/url?url=${encoded}`" target="_blank" class="share__btn" title="Telegram">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.248 13.82l-2.95-.924c-.64-.203-.654-.64.136-.948l11.52-4.44c.534-.194 1.001.13.608.74z"/></svg>
    </a>
    <a :href="`https://vk.com/share.php?url=${encoded}`" target="_blank" class="share__btn" title="VK">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.952 14.168s1.068 1.051.963 1.4c0 0-.092.231-.545.235l-2.395.033c-.516 0-.987-.37-1.395-.77-.31-.303-.583-.632-.892-.934-.122-.116-.263-.226-.428-.228a.43.43 0 00-.389.217c-.072.133-.098.285-.116.434-.028.23-.038.46-.042.692-.003.167-.064.35-.23.435a2.59 2.59 0 01-.549.074c-1.053.026-2.094-.17-3.045-.66-1.025-.53-1.846-1.35-2.54-2.268-.686-.905-1.201-1.926-1.67-2.96a19.56 19.56 0 01-.832-2.33c-.093-.35.01-.538.38-.54l2.604-.004c.39-.001.506.12.633.48.31.879.694 1.73 1.184 2.52.13.21.267.422.455.58.207.173.37.135.475-.085.066-.138.095-.286.11-.437a7.19 7.19 0 00.014-1.7c-.04-.505-.357-.663-.656-.713-.154-.026-.12-.185.03-.31a.92.92 0 01.487-.16l2.707-.038c.443-.006.522.24.528.65l.002 2.777c0 .162.076.494.303.55.186.044.327-.09.454-.216.744-.765 1.252-1.695 1.71-2.648.12-.244.217-.498.32-.748.11-.267.232-.36.52-.366l2.762-.04c.29-.004.58.045.639.38.07.397-.085.845-.42 1.243z"/></svg>
    </a>
    <button class="share__btn" title="Скопировать ссылку" @click="copyLink">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
      </svg>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({ url: { type: String, default: '' } })
const encoded = computed(() => encodeURIComponent(props.url || (import.meta.client ? window.location.href : '')))
const copyLink = () => { if (import.meta.client) navigator.clipboard.writeText(window.location.href) }
</script>
