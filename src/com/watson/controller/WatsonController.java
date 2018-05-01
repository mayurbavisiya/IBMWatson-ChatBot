package com.watson.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class WatsonController {

	@RequestMapping(value = "/")
	public ModelAndView getResources() throws Exception {
		ModelAndView mv = new ModelAndView("start");
		return mv;
	}


}