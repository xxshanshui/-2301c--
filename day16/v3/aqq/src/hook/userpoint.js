import { watch, ref, reactive, computed, onBeforeUnmount, onMounted } from "vue";


function usePoint() {
    const point = reactive({
        x: 0,
        y: 0,
    })
    const savaPoint = (event) => {
        console.log(event, 'event');
        point.x = event.pageX;
        point.y = event.pageY;

    }
    onMounted(() => {
        window.addEventListener('click', savaPoint)


    })
    onBeforeUnmount(() => {
        window.removeEventListener('click', savaPoint)


    })
    return point

}
export default usePoint