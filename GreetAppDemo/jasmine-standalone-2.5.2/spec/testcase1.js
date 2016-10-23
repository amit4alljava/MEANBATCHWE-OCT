describe("test suite for init cap operation",function(){
    it("should converted string would be same",function(){
        var str = "Amit";
        var result = initCap(str);
        expect(str).toBe(result);
    })
})