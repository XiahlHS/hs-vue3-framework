<script lang="tsx">
import { computed, defineComponent, unref } from 'vue'

export default defineComponent({
    name: 'Pdf',
    setup() {
        return () => (
            <div class="my-pdf">
                <hs-pdf></hs-pdf>
            </div>
        )
    }
})
</script>

<style lang="scss" scoped>
.my-pdf {
    height: 100%;
}
</style>
