import Service from "../core/Service";

const AboutRequest = {
    openPaymentService: (data) => Service.post("/user/checkPhone", data),
}

export default AboutRequest;