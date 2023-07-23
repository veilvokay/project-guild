package com.pg.resourceserver.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PartyController {

    @GetMapping("/parties")
    public String[] getParties() {
        return new String[]{"Party 1", "Party 2", "Party 3"};
    }

}
