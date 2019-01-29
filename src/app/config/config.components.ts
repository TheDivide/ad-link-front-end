import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { Config } from './config';

export class ConfigComponent implements OnInit {
  constructor(private configService: ConfigService) { }
  config: Config;
  ngOnInit() {
  }

  showConfig() {
    this.configService.getConfig()
    .subscribe((data: Config) => this.config = { ...data });
  }

  showConfigResponse() {
    this.configService.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        // this.headers = keys.map(key =>
        //   `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.config = { ... resp.body };
      });
  }
}
