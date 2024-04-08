export default defineAppConfig({
    ui: {
        toggle: {
            icon: {
                on: 'text-secondary dark:text-secondary',
                off: 'text-secondary dark:text-secondary'
            }
        },
        card: {
            base: 'overflow-hidden',
            header: {
                background: 'bg-zinc-100 dark:bg-gray-950'
            }
        }
    }
})
