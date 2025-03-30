---
layout: page
sidebar: false

---

<div class="p-12 h-screen">
    <div class="flex flex-col md:flex-row gap-3">
        <div class="flex h-screen w-1/2 justify-center items-center">
            <div class="flex flex-col items-center">
                <h1 class="text-4xl font-bold mb-4">UI/UX Designer</h1>
                <p class="text-lg text-gray-700 mb-8">Creating user-friendly and visually appealing designs.</p>
                <div class="flex flex-row gap-8">
                    <VPButton theme="brand" text="View Portfolio"/>
                    <VPButton theme="alt" text="View Projects"/>
                </div>
            </div>
        </div>
        <div class="flex h-screen w-1/2 justify-center items-center">
            <img src="/ui_ux_designer.png" alt="UI UX Designer">
        </div>
    </div>
</div>

<script setup lang="ts">
    import { VPButton } from 'vitepress/theme'
</script>