package com.watson.restcontroller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.watson.service.WatsonService;

@RestController
public class WatsonRestController {

	@RequestMapping("/getWatsonResponse/{input}")
	public String getWatsonResponse(@PathVariable("input") String input)
			throws Exception {
		Gson gson = new Gson();
		String response = WatsonService.callWatsonService(input, "");
		return gson.toJson(response);
	}
}
