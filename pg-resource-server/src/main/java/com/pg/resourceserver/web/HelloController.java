package com.pg.resourceserver.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String[] hello() {
        return new String[]{"Hello 1", "Hello 2", "Hello 3"};
    }
}
