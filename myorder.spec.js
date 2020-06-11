import {shallowMount, createLocalVue} from "@vue/test-utils";
import MyOrder from "../../src/components/MyOrder";

let wrapper;

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: 'admin'
    },
})


describe('myorder', () => {
    beforeEach(() => {
        const localVue = createLocalVue()
        localVue.use(VueRouter)
        const router = new VueRouter()

        wrapper = shallowMount(MyOrder, {
            localVue,
            router,
            stubs: ['router-link']
        })
    })


    it('Check if form is submitted', () => {
        const submit = jest.fn()
        wrapper.setMethods({submit: submit})
        wrapper.find('.submit').trigger('click')
        expect(wrapper.vm.submit).toHaveBeenCalled()
    })


    it("Check if admin is logged", () => {
        const wrapper = mount(MyOrder, { store, localVue })
        expect(wrapper.find(".username").text()).toBe("admin")
    })
});
