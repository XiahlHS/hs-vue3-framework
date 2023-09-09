<script lang="tsx">
import { computed, defineComponent, unref } from "vue";
import hs from "hs-vue3";

const requestId = "get-captcha";
const groupId = "login";
let num = 0;
const moreClick = () => {
  num++;
  console.log("被点击了", num);
  return hs.$http
    .get("/captcha/getCaptcha", {
      requestId: requestId,
      groupId: groupId,
    })
    .then((res: any) => {
      console.log("=====请求完成=====", num, res);
      num = 0;
    })
    .catch(() => {});
};

const cancelRequest = () => {
  hs.$http.cancel(requestId, groupId, "手动取消请求");
};

export default defineComponent({
  name: "Analysis",
  setup() {
    return () => (
      <div style="height: 800px;">
        <div>
          <el-button class="mb-10" onClick={moreClick}>
            moreClick, 你狂点试试【把网路调到 低速3G】
          </el-button>
          <div class="mb-10 ml-10">
            解决痛点：重复发送请求，只有请求完成后才能触发下一次
          </div>
        </div>
        <el-button class="mb-10" onClick={cancelRequest}>
          取消请求
        </el-button>
      </div>
    );
  },
});
</script>

<style lang="scss" scoped>
.ml-10 {
  margin-left: 10px;
}
.mb-10 {
  margin-bottom: 10px;
}
</style>
